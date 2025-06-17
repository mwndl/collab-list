<template>
  <div class="fixed inset-0 z-50 overflow-hidden">
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-black/50 transition-opacity duration-300"
      :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
      @click="close"
    ></div>

    <!-- Slide Panel -->
    <div 
      class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-full': !isVisible, 'translate-x-0': isVisible }"
    >
      <!-- Close Button -->
      <button 
        @click="close"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Content -->
      <div class="h-full flex flex-col">
        <!-- Header -->
        <div class="px-6 py-8 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ mode === 'auth' ? 'Criar Nova Lista' : 'Acessar Lista' }}
          </h2>
          <p class="mt-2 text-gray-600">
            {{ mode === 'auth' 
              ? 'Crie sua lista de arrecadação em segundos' 
              : 'Digite o código da lista para contribuir' }}
          </p>
        </div>

        <!-- Form -->
        <div class="flex-1 px-6 py-8 overflow-y-auto">
          <!-- Join Mode -->
          <form v-if="mode === 'join'" @submit.prevent="handleJoin" class="space-y-6">
            <div>
              <label for="listCode" class="block text-sm font-medium text-gray-700">Código da Lista</label>
              <input
                type="text"
                id="listCode"
                v-model="joinCode"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Digite o código da lista"
                required
              />
              <p class="mt-2 text-sm text-gray-500">
                Digite o código que você recebeu do organizador da lista
              </p>
            </div>

            <button
              type="submit"
              class="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Acessar Lista
            </button>
          </form>

          <!-- Auth Mode -->
          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <div v-if="!isLogin">
              <label for="name" class="block text-sm font-medium text-gray-700">Seu Nome</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Como você quer ser chamado?"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="password"
                v-model="form.password"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div v-if="!isLogin">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                v-model="form.confirmPassword"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {{ isLogin ? 'Entrar' : 'Criar Conta' }}
            </button>
          </form>

          <!-- Auth Mode Footer -->
          <div v-if="mode === 'auth'" class="mt-6">
            <p class="text-center text-gray-600">
              {{ isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?' }}
              <button
                @click="isLogin = !isLogin"
                class="text-blue-600 hover:text-blue-700 font-semibold"
              >
                {{ isLogin ? 'Criar conta' : 'Fazer login' }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  mode: {
    type: String,
    required: true,
    validator: (value) => ['auth', 'join'].includes(value)
  }
})

const emit = defineEmits(['close'])

const router = useRouter()
const isVisible = ref(false)
const isLogin = ref(true)
const joinCode = ref('')
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// Handle form submission
const handleSubmit = async () => {
  try {
    if (isLogin.value) {
      // TODO: Implement login
      console.log('Login:', form.value)
    } else {
      // TODO: Implement registration
      console.log('Register:', form.value)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

// Handle join submission
const handleJoin = async () => {
  try {
    // TODO: Implement join logic
    console.log('Join code:', joinCode.value)
  } catch (error) {
    console.error('Error:', error)
  }
}

// Close the slide
const close = () => {
  isVisible.value = false
  setTimeout(() => {
    emit('close')
  }, 300) // Wait for animation to complete
}

// Watch for changes in the mode prop
watch(() => props.mode, () => {
  form.value = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  joinCode.value = ''
  isLogin.value = true
})

// Show the slide when mounted
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 50)
})
</script>

<style scoped>
/* Prevent body scroll when slide is open */
:deep(body) {
  overflow: hidden;
}
</style> 