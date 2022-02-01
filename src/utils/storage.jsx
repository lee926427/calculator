export function local(key) {
  return {
    save(payload) {
      return localStorage.setItem(key, JSON.stringify(payload));
    },
    get() {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    },
  };
}
