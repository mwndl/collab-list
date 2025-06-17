<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white snap-y snap-mandatory overflow-y-scroll">
    <HeroSection @openAuth="openAuth" />
    <FeaturesSection />
    <BenefitsSection />
    <CtaSection @openAuth="openAuth" />
    <AuthSlide v-if="showAuth" @close="closeAuth" :mode="authMode" />

    <!-- Navigation Arrows -->
    <div class="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div class="flex flex-col gap-3 sm:gap-4">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
          :class="currentSection === section.id ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'"
          :title="section.name"
        ></button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      v-if="currentSection !== 'cta'"
      class="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      @click="scrollToNextSection"
    >
      <svg
        class="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AuthSlide from '@/components/AuthSlide.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from '@/components/landing/HeroSection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import BenefitsSection from '@/components/landing/BenefitsSection.vue'
import CtaSection from '@/components/landing/CtaSection.vue'

gsap.registerPlugin(ScrollTrigger)

const showAuth = ref(false)
const authMode = ref('auth')
const currentSection = ref('hero')
const isScrolling = ref(false)
const lastScrollTime = ref(0)
const scrollTimeout = ref(null)
const currentCard = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)

const sections = [
  { id: 'hero', name: 'Início' },
  { id: 'features', name: 'Como Funciona' },
  { id: 'benefits', name: 'Benefícios' },
  { id: 'cta', name: 'Comece Agora' }
]

const cards = [
  {
    title: 'Crie sua Lista',
    description: 'Crie uma lista de arrecadação em segundos. Defina itens, quantidades e valores de forma simples e intuitiva.'
  },
  {
    title: 'Compartilhe',
    description: 'Compartilhe o link da sua lista com os participantes. Eles podem contribuir facilmente, sem precisar de cadastro.'
  },
  {
    title: 'Acompanhe',
    description: 'Acompanhe o progresso em tempo real. Veja quem contribuiu e o que falta arrecadar de forma clara e organizada.'
  }
]

const openAuth = (mode) => {
  authMode.value = mode
  showAuth.value = true
  document.body.style.overflow = 'hidden'
}

const closeAuth = () => {
  showAuth.value = false
  document.body.style.overflow = 'auto'
}

const scrollToSection = (sectionId) => {
  if (isScrolling.value) return
  isScrolling.value = true
  
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    currentSection.value = sectionId
  }
  
  setTimeout(() => {
    isScrolling.value = false
  }, 300)
}

const scrollToNextSection = () => {
  const currentIndex = sections.findIndex(s => s.id === currentSection.value)
  if (currentIndex < sections.length - 1) {
    scrollToSection(sections[currentIndex + 1].id)
  }
}

const scrollToPreviousSection = () => {
  const currentIndex = sections.findIndex(s => s.id === currentSection.value)
  if (currentIndex > 0) {
    scrollToSection(sections[currentIndex - 1].id)
  }
}

const handleWheel = (event) => {
  event.preventDefault()
  
  const now = Date.now()
  if (now - lastScrollTime.value < 100) return
  
  lastScrollTime.value = now
  
  if (event.deltaY > 0) {
    scrollToNextSection()
  } else {
    scrollToPreviousSection()
  }
}

const handleScroll = () => {
  const now = Date.now()
  if (now - lastScrollTime.value < 100) return
  
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight
  const currentIndex = sections.findIndex(s => s.id === currentSection.value)
  
  // Find the current section based on scroll position
  const currentSectionElement = sections.find(section => {
    const element = document.getElementById(section.id)
    if (!element) return false
    
    const rect = element.getBoundingClientRect()
    // Consider a section "current" if it's more than 50% visible
    return rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5
  })
  
  if (currentSectionElement && currentSectionElement.id !== currentSection.value) {
    currentSection.value = currentSectionElement.id
  }
  
  // Handle snap scrolling
  if (Math.abs(scrollPosition - (currentIndex * windowHeight)) > windowHeight * 0.3) {
    lastScrollTime.value = now
    
    if (scrollPosition > currentIndex * windowHeight) {
      scrollToNextSection()
    } else {
      scrollToPreviousSection()
    }
  }
}

const scrollToEnd = () => {
  scrollToSection('cta')
}

const scrollToStart = () => {
  scrollToSection('hero')
}

const getCardStackStyle = (index) => {
  const isTopCard = index === currentCard.value;
  const isNextCard = index === (currentCard.value + 1) % cards.length;
  const isPrevCard = index === (currentCard.value - 1 + cards.length) % cards.length;
  
  let transform = '';
  let zIndex = 0;
  let opacity = 1;
  
  if (isTopCard) {
    transform = 'translateY(0) scale(1)';
    zIndex = 3;
  } else if (isNextCard) {
    transform = 'translateY(20px) translateX(20px) scale(0.95)';
    zIndex = 2;
    opacity = 0.8;
  } else if (isPrevCard) {
    transform = 'translateY(20px) translateX(-20px) scale(0.95)';
    zIndex = 2;
    opacity = 0.8;
  } else {
    transform = 'translateY(40px) scale(0.9)';
    zIndex = 1;
    opacity = 0.6;
  }
  
  return {
    transform,
    zIndex,
    opacity,
    pointerEvents: 'auto'
  };
};

const getNumberColor = (index) => {
  const colors = ['text-blue-600', 'text-purple-600', 'text-pink-600'];
  return colors[index];
};

const handleCardClick = (e) => {
  // Prevent click handling during touch events
  if (e.pointerType === 'touch') return;
  
  // Prevent multiple triggers
  if (isScrolling.value) return;
  isScrolling.value = true;
  
  currentCard.value = (currentCard.value + 1) % cards.length;
  
  // Reset scroll lock after animation
  setTimeout(() => {
    isScrolling.value = false;
  }, 500); // Match this with the transition duration
};

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
  touchEndX.value = e.touches[0].clientX; // Reset touchEndX to prevent false triggers
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const diff = touchStartX.value - touchEndX.value;
  const minSwipeDistance = 30; // Reduced minimum swipe distance for better responsiveness
  
  if (Math.abs(diff) > minSwipeDistance) {
    // Prevent multiple triggers
    if (isScrolling.value) return;
    isScrolling.value = true;
    
    if (diff > 0) {
      // Swipe left - next card
      currentCard.value = (currentCard.value + 1) % cards.length;
    } else {
      // Swipe right - previous card
      currentCard.value = (currentCard.value - 1 + cards.length) % cards.length;
    }
    
    // Reset scroll lock after animation
    setTimeout(() => {
      isScrolling.value = false;
    }, 500); // Match this with the transition duration
  }
};

// Add Intersection Observer for better section detection
onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Create Intersection Observer for section detection
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        if (sectionId !== currentSection.value) {
          currentSection.value = sectionId
        }
      }
    })
  }, {
    threshold: 0.5, // Trigger when section is 50% visible
    rootMargin: '-10% 0px -10% 0px' // Add some margin to prevent edge cases
  })
  
  // Observe all sections
  sections.forEach(section => {
    const element = document.getElementById(section.id)
    if (element) {
      observer.observe(element)
    }
  })
  
  let lastScrollTop = 0
  let scrollCount = 0
  
  window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY
    const scrollDiff = Math.abs(currentScrollTop - lastScrollTop)
    
    if (scrollDiff > 100) {
      scrollCount++
      
      if (scrollCount >= 2) {
        if (currentScrollTop > lastScrollTop) {
          scrollToEnd()
        } else {
          scrollToStart()
        }
        scrollCount = 0
      }
    } else {
      scrollCount = 0
    }
    
    lastScrollTop = currentScrollTop
  })
  
  // Cleanup observer on component unmount
  onUnmounted(() => {
    observer.disconnect()
  })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Ensure smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Scroll Snap */
.snap-y {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.snap-start {
  scroll-snap-align: start;
}

/* Prevent Scroll During Animation */
.no-scroll {
  overflow: hidden;
}

/* Blob Animation */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style> 