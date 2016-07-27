# ResizeManager.js
A JavaScript Resize Manager (add,dispatch,remove,removeAll)

# Usage example
```
ResizeManager.add("center box 1",function(){
	centerAbsoluteItem(document.getElementById("myBox"));
});
ResizeManager.dispatch("center box 1");

// Cleaning up
ResizeManager.remove("center box 1");

// Clean everything up
ResizeManager.removeAll();
```
