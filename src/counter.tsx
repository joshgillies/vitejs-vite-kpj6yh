import { signal, computed } from '@preact/signals';

const count = signal(0);
const double = computed(() => count.value * 2);

export default function Counter() {
  return (
    <button onClick={() => count.value++}>
      {count} x 2 = {double}
    </button>
  );
}
