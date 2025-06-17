<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white snap-y snap-mandatory overflow-y-scroll">
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden snap-start">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Organize suas arrecadações de forma simples e eficiente
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Crie listas de arrecadação, controle contribuições e acompanhe o progresso em tempo real.
            Perfeito para confraternizações, eventos e muito mais!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="openAuthSlide('auth')"
              class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Criar Lista Grátis
            </button>
            <button
              @click="openAuthSlide('join')"
              class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
            >
              Acessar uma Lista
            </button>
          </div>
        </div>
      </div>
      <!-- Background Blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white snap-start relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Três passos simples para começar a organizar suas arrecadações
          </p>
        </div>

        <!-- Card Stack Container -->
        <div class="relative max-w-2xl mx-auto h-[250px] sm:h-[400px]">
          <!-- Cards Stack -->
          <div class="relative w-full h-full">
            <div 
              v-for="(card, index) in cards" 
              :key="index"
              class="absolute w-full h-full transition-all duration-500 ease-out cursor-pointer"
              :style="getCardStackStyle(index)"
              @click="handleCardClick"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
            >
              <div class="relative group w-full h-full">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-xl h-full flex flex-col sm:flex-row">
                  <!-- Number Badge -->
                  <div class="flex-shrink-0 w-12 h-12 sm:w-24 sm:h-24 flex items-center justify-center mb-2 sm:mb-0">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-sm"></div>
                      <span class="relative text-4xl sm:text-7xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{{ index + 1 }}</span>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-grow flex flex-col justify-center sm:pl-8 sm:border-l-2 sm:border-gray-100">
                    <h3 class="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-4 tracking-tight">{{ card.title }}</h3>
                    <p class="text-sm sm:text-lg text-gray-600 leading-relaxed">{{ card.description }}</p>
                  </div>

                  <!-- Navigation Arrow -->
                  <div class="absolute right-3 sm:right-6 bottom-3 sm:bottom-6 text-gray-400 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <svg class="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="min-h-screen flex items-center justify-center py-8 sm:py-16 lg:py-20 bg-white snap-start relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-8 sm:mb-16">
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Por que usar o CollabList?
          </h2>
          <p class="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Uma solução completa para suas arrecadações
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8 max-w-6xl mx-auto">
          <!-- Benefit 1 -->
          <div class="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div class="flex items-start space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Simples e Rápido</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  Crie e gerencie suas listas em segundos. Interface intuitiva e sem complicações.
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div class="flex items-start space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Colaboração em Tempo Real</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  Todos veem as atualizações instantaneamente. Sem duplicatas, sem confusão.
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div class="flex items-start space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Controle Total</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  Acompanhe o progresso, ajuste metas e mantenha tudo organizado em um só lugar.
                </p>
              </div>
            </div>
          </div>

          <!-- Benefit 4 -->
          <div class="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-lg sm:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div class="flex items-start space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Seguro e Confiável</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  Escolha entre listas públicas e privadas. Você tem controle total sobre quem pode acessá-las.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="min-h-screen flex items-center justify-center py-8 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 snap-start relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block mb-4 sm:mb-8">
            <span class="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-500 text-white">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Comece Agora
            </span>
          </div>

          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight">
            Do churras ao evento da firma, organize tudo com o CollabList
          </h2>
          
          <p class="text-base sm:text-xl text-blue-100 mb-6 sm:mb-12 max-w-2xl mx-auto">
            Crie sua primeira lista gratuitamente e descubra como é fácil organizar o que cada um vai levar pro seu evento.
            Sem complicações, sem listas confusas em grupos.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              @click="openAuthSlide('auth')"
              class="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-white text-blue-600 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Criar Lista Grátis
            </button>
            <button
              @click="openAuthSlide('join')"
              class="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-blue-500 text-white rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-blue-400"
            >
              Acessar uma Lista
            </button>
          </div>

          <div class="mt-8 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-100">
            <div class="flex items-center">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-xs sm:text-sm">Simples e Rápido</span>
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-xs sm:text-sm">Totalmente gratuito</span>
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-xs sm:text-sm">Fácil de usar</span>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <!-- Auth Slide -->
    <AuthSlide
      v-if="showAuth"
      :mode="authMode"
      @close="showAuth = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AuthSlide from '@/components/AuthSlide.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

const openAuthSlide = (mode) => {
  authMode.value = mode
  showAuth.value = true
  document.body.style.overflow = 'hidden'
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

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('scroll', handleScroll, { passive: true })
  
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