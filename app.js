// Massivni hosil qilish va elementlarni kiritish

// Array 1

// let n = Number(prompt("Sonni kiriting: "));

// function generateOddNumbers(n) {
//     let natija = [];
//     for (let i = 1; i <= n; i++) {
//         natija.push(2 * i + 1);
//     }
//     return natija;
// }

// let oddNumbers = generateOddNumbers(n);
// console.log(oddNumbers);

//Array 2

// function generatePowersOfTwo(n) {
//     let natija = [];
//     for (let i = 1; i <= n; i++) {
//         natija.push(Math.pow(2, i));
//     }
//     return natija;
// }

// let n = Number(prompt("Sonni kiriting: "));
// let powersOfTwo = generatePowersOfTwo(n);
// console.log(powersOfTwo);


//Array 3  

// function arifmetikProgressiya(n, A, D) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(A + i * D);
//     }
//     return result;
// }

// let n3 = 5, A = 2, D = 3;
// let arifmetikProgressiyaNatijasi = arifmetikProgressiya(n3, A, D);
// console.log(arifmetikProgressiyaNatijasi);


//Array 4

// function geometrikProgressiya(n, A, D) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(A * Math.pow(D, i));
//     }
//     return result;
// }

// let n4 = 5, A4 = 2, D4 = 3;
// let geometrikProgressiyaNatijasi = geometrikProgressiya(n4, A4, D4);
// console.log(geometrikProgressiyaNatijasi);


//Array 5

// function Fibonacci(n) {
//     let result = [1, 1];
//     for (let i = 2; i < n; i++) {
//         result.push(result[i - 1] + result[i - 2]);
//     }
//     return result.slice(0, n);
// }

// let n5 = 5;
// let fibonacciNatija = Fibonacci(n5);
// console.log(fibonacciNatija);


//Array 6

// function generateCustomSequence(n, A, B) {
//     let result = [A, B];
//     for (let i = 2; i < n; i++) {
//         result.push(result.reduce((sum, val) => sum + val, 0));
//     }
//     return result;
// }

// let n6 = 5, A6 = 1, B6 = 2;
// let customSequence = generateCustomSequence(n6, A6, B6);
// console.log(customSequence);


//Array 7


// function teskariArray(arr) {
//     return arr.reverse();
// }

// let array7 = [1, 2, 3, 4, 5];
// let reversedArray = teskariArray(array7);
// console.log(reversedArray);



//Array 8


// function array8(arr) {
//     let oddIndexElements = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         oddIndexElements.push(arr[i]);
//     }
//     oddIndexElements.sort((a, b) => a - b);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', oddIndexElements.join(' '), 'toqlar soni =', oddIndexElements.length);
// }

// array8([4, 5, 7, 8, 6, 9]);

//Array 9


// function array9(arr) {
//     let evenIndexElements = [];
//     for (let i = 1; i < arr.length; i += 2) {
//         evenIndexElements.push(arr[i]);
//     }
//     evenIndexElements.sort((a, b) => b - a);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', evenIndexElements.join(' '), 'juftlar soni =', evenIndexElements.length);
// }

// array9([4, 5, 7, 8, 6, 9]);


//Array 10


// function array10(arr) {
//     let evenIndexElements = [];
//     let oddIndexElements = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             evenIndexElements.push(arr[i]);
//         } else {
//             oddIndexElements.push(arr[i]);
//         }
//     }
//     evenIndexElements.sort((a, b) => a - b);
//     oddIndexElements.sort((a, b) => b - a);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', evenIndexElements.concat(oddIndexElements).join(' '));
// }

// array10([4, 5, 7, 8, 6, 9]);


//Array 11


// function array11(arr, K) {
//     let multiplesOfK = arr.filter((_, index) => index % K === 0);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', multiplesOfK.join(' '));
// }

// array11([4, 5, 7, 8, 6, 9], 2);


//Array 12

// function array12(arr) {
//     let evenIndexElements = arr.filter((_, index) => index % 2 === 0);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', evenIndexElements.join(' '));
// }

// array12([4, 5, 7, 8, 6, 9]);


//Array 13

// function array13(arr) {
//     let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', oddIndexElements.join(' '));
// }

// array13([4, 5, 7, 8, 6, 9]);


//Array 14

// function array14(arr) {
//     let evenIndexElements = arr.filter((_, index) => index % 2 === 0);
//     let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
//     console.log('Massiv elementlar:', arr.join(' '));
//     console.log('Natija:', evenIndexElements.concat(oddIndexElements).join(' '));
// }

// array14([4, 5, 7, 8, 6, 9]);












// Keyingi mashqlar

//1

// let massiv = [];
// console.log(massiv);

// //2

// let massiv5 = [1, 2, 3, 4, 5, 6, 7];
// console.log(massiv5);

// //3

// console.log(massiv5.length);

// //4

// let firstElement = massiv5[0];
// let normalElement = massiv5[3];
// let lastElement = massiv5[6]

// console.log(firstElement, normalElement, lastElement);

// //5

// let mixedDataTypes = ['String', 7, true, NaN, null, undefined];
// console.log(mixedDataTypes.length);

// //6

// let ItCompanies =  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// //7

// console.log(ItCompanies);

// //8 

// console.log(ItCompanies.length);

// //9

// let firstCompany = ItCompanies[0];
// let normalCompany = ItCompanies[3];
// let lastCompany = ItCompanies[6]

// console.log(firstCompany, normalCompany, lastCompany);

// //10

// console.log(ItCompanies[0]);
// console.log(ItCompanies[1]);
// console.log(ItCompanies[2]);
// console.log(ItCompanies[3]);
// console.log(ItCompanies[4]);
// console.log(ItCompanies[5]);
// console.log(ItCompanies[6]);

// //11



// //12

// console.log(`${ItCompanies[0]}, ${ItCompanies[1]}, ${ItCompanies[2]}, ${ItCompanies[3]}, ${ItCompanies[4]}, ${ItCompanies[5]} va ${ItCompanies[6]} yirik IT kompaniyalari `);

// //13

// function qidiruv(company) {
//     let qidiruvKompanya = ItCompanies.includes(company);

//     return qidiruvKompanya;
// }

// let qidiruvNatijasi = qidiruv('Google');
// console.log(qidiruvNatijasi);

// //14



//Level 3

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]