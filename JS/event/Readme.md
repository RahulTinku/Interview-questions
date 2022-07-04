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

