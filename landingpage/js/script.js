const mainImage = document.getElementById('imageMain');
const firstImage = document.getElementById('imageOne');
const secondImage = document.getElementById('imageTwo');
const thirdImage = document.getElementById('imageThree');


function returnDefault() {
    mainImage.src = 'https://files.oaiusercontent.com/file-QNETpvufBHTgpQ3TwSVprh?se=2025-01-04T17%3A13%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd17ce2be-892d-46f2-bb63-9d02e5b1e491.webp&sig=sXe9buxlyX84hBRIw1z6OrBMWG2aVqE%2B4XT4UbSfscI%3D';
}

function firstMini() {
    mainImage.src = 'https://files.oaiusercontent.com/file-KE4zGL3ewKLHYXcc8Pb62X?se=2025-01-04T17%3A17%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1a187c20-4a66-4ec3-92e9-788b04966f39.webp&sig=eu5wz08FXKuTvAlF1LMpGCYPkuMrvZ3h27N/H2JpX1Q%3D';
}
function secondMini() {
    mainImage.src = 'https://files.oaiusercontent.com/file-8pSVK3yHSzUTqe4MAM8yeX?se=2025-01-04T17%3A17%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Deac29cbc-35ae-4d63-a424-0b2b30eb381b.webp&sig=1VSeSTrabQ56J8nu/R5vhdovNDF9yEAA74rfreduaw0%3D';
}
function thirdMini() {
    mainImage.src = 'https://files.oaiusercontent.com/file-1v2PMRMwy5Z39gv77esSCN?se=2025-01-04T17%3A17%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2ec14638-e0a2-4162-971b-095e88bf985f.webp&sig=9Yoa%2Btf2ADia0Q9jM16dP1r7ofGetpT6slse1Hk8Kjo%3D';
}

returnDefault();

firstImage.addEventListener('mouseover', firstMini);
firstImage.addEventListener('mouseleave', returnDefault);

secondImage.addEventListener('mouseover', secondMini);
secondImage.addEventListener('mouseleave', returnDefault);

thirdImage.addEventListener('mouseover', thirdMini);
thirdImage.addEventListener('mouseleave', returnDefault);