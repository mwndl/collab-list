<template>
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
</template> 