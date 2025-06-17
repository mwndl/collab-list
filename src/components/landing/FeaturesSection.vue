<template>
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
</template>

<script setup>
import { ref } from 'vue'

const currentCard = ref(0)
const isScrolling = ref(false)
const touchStartX = ref(0)
const touchEndX = ref(0)

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

const handleCardClick = (e) => {
  if (e.pointerType === 'touch') return;
  if (isScrolling.value) return;
  isScrolling.value = true;
  
  currentCard.value = (currentCard.value + 1) % cards.length;
  
  setTimeout(() => {
    isScrolling.value = false;
  }, 500);
};

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const diff = touchStartX.value - touchEndX.value;
  const minSwipeDistance = 30;
  
  if (Math.abs(diff) > minSwipeDistance) {
    if (isScrolling.value) return;
    isScrolling.value = true;
    
    if (diff > 0) {
      currentCard.value = (currentCard.value + 1) % cards.length;
    } else {
      currentCard.value = (currentCard.value - 1 + cards.length) % cards.length;
    }
    
    setTimeout(() => {
      isScrolling.value = false;
    }, 500);
  }
};
</script> 