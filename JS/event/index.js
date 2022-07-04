const grandParent = document.querySelector('.grandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandParent.addEventListener(
  'click',
  (e) => {
    console.log('GrandParent Capture');
  },
  { capture: true }
);

grandParent.addEventListener('click', (e) => {
  console.log('GrandParent Bubble');
});

parent.addEventListener(
  'click',
  (e) => {
    console.log('Parent Capture');
  },
  { capture: true }
);

parent.addEventListener('click', (e) => {
  console.log('Parent Bubble');
});
child.addEventListener(
  'click',
  (e) => {
    console.log('Child Capture');
  },
  { capture: true }
);

child.addEventListener('click', (e) => {
  console.log('Child Bubble');
});
