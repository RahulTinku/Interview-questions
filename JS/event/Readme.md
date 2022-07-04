## Event capturing and Event bubbling

```
<div id="grandParent">
    <div id="parent">
        <div id="child">
        </div>
    </div>
</div>
```

### Event Capturing

- All event move from top to bottom
- document => grandparent => parent => child

### Event bubbling

- All event move from bottom to top

* child => parent => grandparent => document

![Image](https://github.com/RahulTinku/Interview-questions/blob/main/JS/event/Capture.PNG)

Watch(https://www.youtube.com/watch?v=XF1_MlZ5l6M)


## Current Target & Target
* current target :- always refers to the element to which the event handler is attached to 
* target :- identifies the element on which the event occured
```
<div>
    <button class='btn'>First button</button>
    <button class='btn'>Second button
        <strong>I am inside button
            <strong> I am nested inside button strong</strong>
        </strong>
    </button>
    <button class='btn'>First button</button>
</div>

const btn = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListner('click', e => {
        console.log('target' ,e.target)
        console.log('Current target' ,e.currentTarget)
        e.target.style.color = 'green'
    }
}
```
