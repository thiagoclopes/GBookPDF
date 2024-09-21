// src/components/CounterButton.tsx
import { defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'CounterButton',
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    return () => (
      <button onClick={increment} class="px-4 py-2 bg-blue-500 text-white rounded">
        Contador: {count.value}
      </button>
    );
  },
});
