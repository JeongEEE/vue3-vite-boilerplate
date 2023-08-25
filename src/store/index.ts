import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue';

// ######################### sample ###########################
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const name = ref('Eduardo');
    const arr = reactive([1]);
    const user = reactive({ data: { token: '' } });
    const doubleCount = computed(() => count.value * 2);
    const getDataAll = computed(() => arr);
    function increment() {
      count.value++;
    }
    function addList(param: number) {
      arr.push(param);
    }
    const setCount = (payload: any) => (count.value = payload);
    const setUser = (payload: any) => (user.data = payload);
    return {
      count,
      name,
      arr,
      user,
      doubleCount,
      increment,
      addList,
      getDataAll,
      setUser,
      setCount,
    };
  },
  { persist: { enabled: true, strategies: [{ storage: localStorage }] } }
);
/*
	##### [ .vue 내부에서 사용법 ] #####
import { useCounter } from "./stores/count";
// 구조분해할당 활용
import { storeToRefs } from "pinia";

const arr = useListStore();
// 구조분해할당 활용
const { getDataAll } = storeToRefs(arr);

function addList() {
  if (!text.value) return;
  arr.addList(text.value);
  // 액션 후촐 외에도 직접 내부 API로 데이터 변경 가능.
  // arr.$patch({ arr: [...arr.getDataAll, text.value] });
  text.value = "";
}
*/
/*
export const userDataStore = defineStore('userData', () => {
  const personalSetting = reactive({ data: {} });
  const memoDecrypto = ref(false);
	const setPersonalSetting = (payload: object) => personalSetting.data = payload;
	return { personalSetting, memoDecrypto,
		setPersonalSetting
	}
}, { persist: { enabled: true, strategies: [{ storage: localStorage }] }
})
*/
