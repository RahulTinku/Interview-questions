# Event capturing and Event bubbling

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

![Image]()
