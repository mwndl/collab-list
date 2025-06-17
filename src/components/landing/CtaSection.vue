<template>
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
            @click="$emit('openAuth', 'auth')"
            class="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-white text-blue-600 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Criar Lista Grátis
          </button>
          <button
            @click="$emit('openAuth', 'join')"
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
</template>

<script setup>
defineEmits(['openAuth'])
</script> 