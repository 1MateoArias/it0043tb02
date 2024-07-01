document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const boxes = document.querySelectorAll('.box');
    
    document.getElementById('reset-btn').addEventListener('click', resetFlexbox);
    document.getElementById('gap').addEventListener('input', updateGap);
    
    document.querySelectorAll('[data-flex-direction]').forEach(button => {
    button.addEventListener('click', () => {
    setFlexDirection(button.getAttribute('data-flex-direction'));
    });
    });
    
    document.querySelectorAll('[data-justify-content]').forEach(button => {
    button.addEventListener('click', () => {
    justifyContent(button.getAttribute('data-justify-content'));
    });
    });
    
    document.querySelectorAll('[data-align-items]').forEach(button => {
    button.addEventListener('click', () => {
    alignItems(button.getAttribute('data-align-items'));
    });
    });
    
    document.getElementById('reset-grow-btn').addEventListener('click', resetFlexGrow);
    document.getElementById('grow-all-btn').addEventListener('click', growAll);
    
    document.getElementById('box1-grow').addEventListener('input', (e) => {
    updateGrow('box1', e.target.value);
    });
    
    document.getElementById('box2-grow').addEventListener('input', (e) => {
    updateGrow('box2', e.target.value);
    });
    
    document.getElementById('box3-grow').addEventListener('input', (e) => {
    updateGrow('box3', e.target.value);
    });
    
    function resetFlexbox() {
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'flex-start';
    container.style.gap = '0px';
    resetFlexGrow();
    }
    
    function setFlexDirection(direction) {
    container.style.flexDirection = direction;
    }
    
    function justifyContent(value) {
    container.style.justifyContent = value;
    }
    
    function alignItems(value) {
    container.style.alignItems = value;
    }
    
    function updateGap() {
    const gapValue = document.getElementById('gap').value;
    if (gapValue >= 0) {
    container.style.gap = `${gapValue}px`;
    }
    }
    
    function resetFlexGrow() {
    boxes.forEach(box => box.style.flexGrow = 0);
    document.getElementById('box1-grow').value = 0;
    document.getElementById('box2-grow').value = 0;
    document.getElementById('box3-grow').value = 0;
    }
    
    function growAll() {
    boxes.forEach(box => box.style.flexGrow = 1);
    document.getElementById('box1-grow').value = 1;
    document.getElementById('box2-grow').value = 1;
    document.getElementById('box3-grow').value = 1;
    }
    
    function updateGrow(boxClass, value) {
    const box = document.querySelector(`.${boxClass}`);
    if (value >= 0) {
    box.style.flexGrow = value;
    }
    }
    });