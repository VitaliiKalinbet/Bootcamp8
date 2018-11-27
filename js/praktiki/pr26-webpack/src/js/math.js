// ВАРИАНТ 1 экспорта
// export function sum (...args) {
//     args.reduce((acc, el) => acc + el, 0);
// };
// export function substr (...args) {
//     args.reduce((acc, el) => acc - el);
// };
// // export - даем возможность другим js файлами получать доступ к нашим функциям

// ==============================================================================================
// ВАРИАНТ 2 экспорта
function sum (...args) {
    return args.reduce((acc, el) => acc + el, 0);
};
function substr (...args) {
    return args.reduce((acc, el) => acc - el);
};
function pow (a,b) {
    return Math.pow(a,b);
}
export { sum, substr };
export default pow;

// export default - может быть только одна в проекте. Преимущество только в том что можно поменять название функции