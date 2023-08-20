// const inputIsm = document.getElementById("ism");
// const inputFamiliya = document.getElementById("familiya");
// const result = document.getElementById("result");
// const table = document.querySelector("table, tbody");

// let xodim = {};
// let son = 1;

// const getValues = () => {
//   xodim = {
//     ism: inputIsm.value,
//     familiya: inputFamiliya.value,
//   };
//   table.innerHTML += `
//   <tr>
//     <td>${son++}</td>
//     <td>${xodim.ism}</td>
//     <td>${xodim.familiya}</td>
//   </tr>
//   `;

//   console.log(xodim);
// };

let summaInput = document.querySelector("[name=summa]");
let turSelect = document.getElementById("tur");
let title = document.getElementById("title");
let tableTbody = document.querySelector("#table tbody ");
let calcTable = document.querySelector("#result tbody");
let list = [];
const turList = ["Kirim", "Chiqim"];

// Kirim chiqimni statistikaga chiqarib xisoblash
const calc = () => {
  calcTable.innerHTML = "";
  let summaKirim = 0;
  let summaChiqim = 0;

  list.forEach((value) => {
    if (value.tur == 0) {
      summaKirim += value.summa;
    }
    if (value.tur == 1) {
      summaChiqim += value.summa;
    }
  });

  // 1- tablitsani ichiga yozib beradi va chiqimni qizil kirimni yashil rangda ko'rsatadi

  calcTable.innerHTML = `
       <tr>
          <td>${summaKirim.toLocaleString()} so'm</td>
          <td>${summaChiqim.toLocaleString()} so'm</td>
          <td class= "${summaKirim - summaChiqim > 0 ? "plus" : "minus"}">

          ${Math.abs(summaChiqim - summaKirim).toLocaleString()} so'm</td>
        </tr> `;
};

// 2- tablitsani ichiga yozib beradi

const render = () => {
  tableTbody.innerHTML = "";
  list.forEach((value, index) => {
    tableTbody.innerHTML += `
     <tr>
     <td>${index + 1}</td>
     <td> ${turList[value.tur]}</td>
     <td> ${value.summa.toLocaleString()} so'm </td>
     <td> ${value.title}</td>
     </tr>
    `;
    console.log(value, index);
  });
};

//  maydonlarni tozalab beradi

const clearElements = () => {
  summaInput.value = "";
  turSelect.value = "0";
  title.value = "";
};

// yangi xarajatni massivga qo'shish va malumotlarni tablega chiqarish

const add = () => {
  if (summaInput.value && turSelect.value) {
    list.unshift({
      summa: +summaInput.value,
      tur: turSelect.value,
      title: title.value,
    });
    clearElements();
    render();
    calc();
  }
};
