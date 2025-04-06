//Verilmiş arrayın cüt ədədlərinin maksimumu ilə
// tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin.
// arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];



// function change() {
//   max = 0;
//   min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && max < arr[i]) {
//       max = arr[i];
//     }
//     if (arr[i] % 2 !== 0 && min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//       arr[i] = min;
//     } else if (arr[i] === min) {
//       arr[i] = max;
//     }
//   }
//   console.log(max);
//   console.log(min);
//   console.log(arr);
// }

// change();
//Verilmis arrayin  daxilinde qiymeti
// 50 den cox olanlari array kimi qaytaran kod yaz
//    arr= [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// function say() {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].stok>50) {
        
//         console.log(arr[i])
//         } 
// }} say();
 
//yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca ekrana cixaran kod yaz
// arr= [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].kategori==="Meyve ve Sebzeler") {
//         console.log(arr[i]);
//          }
    
// }

// yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari 
//   ve stokda  2 den cox olanlari   ekrana cixaran kod yaz  
// arr= [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].kategori==="Meyve ve Sebzeler"&&arr[i].fiyat>2) {
//         console.log(arr[i]);
        
//     }
    
// }


//  yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz
// arr= [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i].urunAdi==="Süt") {
//     console.log(" sud urunu var ");
//      }}
//      if (arr[i].urunAdi!=="Süt") {
//         console.log(" sud urunu yoxdu ");
//          }
// yuxaridaki arrayde   Ton baliginin indexini tapan program yaz
// arr= [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].urunAdi==="Ton Balığı") {
//     console.log(i);
    
//   }
    
// }


//trim
let trim="    Aygun "
let result= trim.trim()
console.log(result);


 let text="   Aygun  "
function writetrim (text,old,newword ) {
   let result=""
    for (let i = 0; i < text.length; i++) {
      if (text[i]===old) {
        result+=newword
      }
       else{ 
        result+=text[i]
       }
    }
    return result
} console.log( writetrim (text," ","" ));
