<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-left">
          <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Arrecadações Colaborativas Simplificadas
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Crie listas de arrecadação, compartilhe com seus amigos e acompanhe o progresso em tempo real.
            Sem necessidade de login, com apenas um toque para contribuir!
          </p>
          <div class="space-x-4">
            <button
              @click="openAuthSlide('auth')"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Criar Lista de Arrecadação
            </button>
            <button
              @click="openAuthSlide('join')"
              class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Participar de uma Arrecadação
            </button>
          </div>
        </div>
        <div class="relative">
          <div class="relative bg-white p-4 rounded-2xl shadow-xl">
            <img
              src="https://placehold.co/600x400/2563eb/ffffff?text=Lista+de+Arrecadação"
              alt="Lista de Arrecadação"
              class="w-full h-auto rounded-xl"
            />
          </div>
          <div class="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute -top-6 -right-6 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-900 mb-16">
          Como Funciona
        </h2>
        <div class="grid md:grid-cols-3 gap-12">
          <div class="text-center p-6 relative">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Crie sua Lista</h3>
              <p class="text-gray-600">
                Adicione itens e quantidades necessárias para sua arrecadação
              </p>
            </div>
          </div>
          <div class="text-center p-6 relative">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Compartilhe</h3>
              <p class="text-gray-600">
                Envie o link para seus amigos - sem necessidade de login
              </p>
            </div>
          </div>
          <div class="text-center p-6 relative">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Contribua</h3>
              <p class="text-gray-600">
                Um toque para contribuir e acompanhar o progresso em tempo real
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp Comparison Section -->
    <div class="container mx-auto px-4 py-24">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-8">
            Chega de listas em grupos!
          </h2>
          <div class="space-y-8">
            <div>
              <p class="text-gray-600 text-lg leading-relaxed">
                Você já passou por isso: alguém cria uma lista de arrecadação, joga no grupo, todo mundo copia e cola, 
                cada um coloca do jeito que quer, alguns esquecem de marcar o que já foi pego, sobrescrevem a contribuição do outro, 
                marcam errado... No final, é um caos!
              </p>
            </div>
            <div>
              <p class="text-gray-600 text-lg leading-relaxed">
                Com o CollabList, você tem todo o controle sobre sua lista. Visualize as contribuições 
                em tempo real, ajuste as metas conforme necessário, acompanhe o progresso e mantenha 
                tudo organizado em um só lugar. Perfeito para eventos que precisam de grandes quantidades 
                de itens, metas de doações ou qualquer tipo de arrecadação colaborativa.
              </p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="relative bg-white p-4 rounded-2xl shadow-xl">
            <img
              src="https://placehold.co/600x600/2563eb/ffffff?text=WhatsApp+vs+CollabList"
              alt="Comparação WhatsApp vs CollabList"
              class="w-full h-auto rounded-xl aspect-square object-cover"
            />
          </div>
          <div class="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute -top-6 -right-6 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>

    <!-- Key Benefits Section -->
    <div class="container mx-auto px-4 py-24">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-16">
        Por que usar?
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-start">
            <div class="bg-green-100 p-4 rounded-xl mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold mb-3">Simples e Rápido</h3>
              <p class="text-gray-600 text-lg">
                Sem necessidade de criar conta ou fazer login. Apenas compartilhe o link e comece a arrecadar!
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-start">
            <div class="bg-blue-100 p-4 rounded-xl mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold mb-3">Acompanhamento em Tempo Real</h3>
              <p class="text-gray-600 text-lg">
                Veja o progresso da arrecadação, quem contribuiu e quanto falta para atingir a meta
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-start">
            <div class="bg-purple-100 p-4 rounded-xl mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold mb-3">Contribuição Instantânea</h3>
              <p class="text-gray-600 text-lg">
                Com apenas um toque, seus amigos podem contribuir e você acompanha tudo em tempo real
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-start">
            <div class="bg-yellow-100 p-4 rounded-xl mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold mb-3">Transparência</h3>
              <p class="text-gray-600 text-lg">
                Todos podem ver o progresso em tempo real. Sem dúvidas sobre quem já contribuiu ou quanto falta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-600 text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-6">Comece sua Arrecadação Agora</h2>
          <p class="text-xl mb-12">
            Crie sua lista em segundos e comece a arrecadar com seus amigos
          </p>
          <div class="flex justify-center space-x-6">
            <button
              @click="openAuthSlide('auth')"
              class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Criar Lista de Arrecadação
            </button>
            <button
              @click="openAuthSlide('join')"
              class="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Participar de uma Arrecadação
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Auth Slide -->
    <AuthSlide
      :is-open="showAuth"
      :mode="authMode"
      @close="showAuth = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AuthSlide from '../components/AuthSlide.vue'

const showAuth = ref(false)
const authMode = ref('auth')

const openAuthSlide = (mode) => {
  authMode.value = mode
  showAuth.value = true
}
</script>

<style>
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