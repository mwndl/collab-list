<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-2 text-gray-900">Confra 2025</h1>
    <p class="text-gray-600 mb-8">Organizado por João Silva</p>

    <div class="space-y-4">
      <div v-for="item in items" :key="item.id" class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-900">{{ item.title }}</h3>
          <button @click="toggleItem(item.id)" class="text-gray-500 hover:text-gray-700 transition-colors">
            <ChevronDownIcon v-if="!item.isExpanded" class="h-5 w-5" />
            <ChevronUpIcon v-else class="h-5 w-5" />
          </button>
        </div>
        
        <div class="mt-2">
          <div class="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progresso</span>
            <span>{{ calculateProgress(item) }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
                 :style="{ width: calculateProgress(item) + '%' }"></div>
          </div>
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>{{ calculateTotal(item) }} fardos</span>
            <span>Meta: {{ item.target }} fardos</span>
          </div>
        </div>

        <div v-if="item.isExpanded" class="mt-4">
          <div class="space-y-2">
            <div v-for="contribution in item.contributions" :key="contribution.id" 
                 class="flex justify-between text-sm text-gray-600">
              <span>{{ contribution.name }}</span>
              <span>{{ contribution.quantity }} fardos</span>
            </div>
          </div>
          
          <button @click="openContributionDialog(item)"
                  class="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
            Contribuir
          </button>
        </div>
      </div>
    </div>

    <!-- Contribution Dialog -->
    <TransitionRoot appear :show="isDialogOpen" as="template">
      <Dialog as="div" @close="closeDialog" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
        </TransitionChild>

        <div class="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-xl">
              <DialogTitle class="text-lg font-medium text-gray-900 mb-4">Contribuir para {{ selectedItem?.title }}</DialogTitle>
              
              <form @submit.prevent="saveContribution" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Nome</label>
                  <input v-model="newContribution.name" type="text" required
                         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700">Quantidade de fardos</label>
                  <input v-model.number="newContribution.quantity" type="number" required min="1"
                         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                </div>

                <div class="flex justify-end space-x-3">
                  <button type="button" @click="closeDialog"
                          class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                    Cancelar
                  </button>
                  <button type="submit"
                          class="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors">
                    Salvar
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'

const items = ref([
  {
    id: 1,
    title: 'Coca-cola 2L (fardo 6 und)',
    target: 100,
    isExpanded: false,
    contributions: [
      { id: 1, name: 'Maria', quantity: 12 },
      { id: 2, name: 'Pedro', quantity: 6 }
    ]
  },
  {
    id: 2,
    title: 'Coca-cola Zero 2L (fardo 6 und)',
    target: 50,
    isExpanded: false,
    contributions: [
      { id: 1, name: 'Ana', quantity: 6 }
    ]
  },
  {
    id: 3,
    title: 'Água com gás 500ml (fardo 12 und)',
    target: 500,
    isExpanded: false,
    contributions: [
      { id: 1, name: 'Carlos', quantity: 24 },
      { id: 2, name: 'Julia', quantity: 36 }
    ]
  }
])

const isDialogOpen = ref(false)
const selectedItem = ref(null)
const newContribution = ref({
  name: '',
  quantity: 1
})

const calculateProgress = (item) => {
  const total = item.contributions.reduce((sum, c) => sum + c.quantity, 0)
  return Math.min(Math.round((total / item.target) * 100), 100)
}

const calculateTotal = (item) => {
  return item.contributions.reduce((sum, c) => sum + c.quantity, 0)
}

const toggleItem = (itemId) => {
  const item = items.value.find(i => i.id === itemId)
  if (item) {
    item.isExpanded = !item.isExpanded
  }
}

const openContributionDialog = (item) => {
  selectedItem.value = item
  newContribution.value = {
    name: '',
    quantity: 1
  }
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
  selectedItem.value = null
}

const saveContribution = () => {
  if (selectedItem.value) {
    selectedItem.value.contributions.push({
      id: Date.now(),
      name: newContribution.value.name,
      quantity: newContribution.value.quantity
    })
    closeDialog()
  }
}
</script> 