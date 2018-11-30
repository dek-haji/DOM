/* Use JavaScript to obtain a reference to the first section with
 the class of article_header and change its text with the textContent
  property to "Welcome to the {insert your name here} blog" */
const Article1 = document.querySelector('.article__header');
console.log(Article1);
Article1.textContent = 'Welcome to the DEK blog';
// // Use JavaScript to obtain a reference to all article__header
//   elements and change their classList property value to article__header important.//
const Header1 = document.querySelectorAll('.article__header');
console.log(Header1);
for (var i = 0; i < Header1.length; i++) {
    Header1[i].classList.remove('article__header');
    Header1[i].classList.add('important');
}


// Obtain a reference the element with a class of dashed and remove it.
const dash = document.querySelector('.dashed');
console.log(dash);
dash.classList.remove('dashed');
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it. //
const article2 = document.querySelector('.article__footer');
console.log(article2);
article2.classList.add('goldenrot');