/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable max-statements */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
window.addEventListener('load', () => {
  //构键静态的todolist框
  let count = 0;
  const todoBox = document.querySelector('.todoBox');
  todoBox.focus();
  todoBox.setAttribute('type', 'text');
  const todoDiv = document.querySelector('#todoDiv');
  const main = document.createElement('section');
  main.classList.add('maim');
  todoDiv.appendChild(main);
  //底边状态和操作按钮框
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  todoDiv.appendChild(footer);
  //记录todo里存在，但还未完成的任务
  const todoCount = document.createElement('span');
  todoCount.classList.add('todoCount');
  footer.appendChild(todoCount);
  const strong = document.createElement('strong');
  todoCount.appendChild(strong);
  const todoCountSpan = document.createElement('span');
  todoCount.appendChild(todoCountSpan);
  //全部、激活、完成按钮的静态实现
  const fliters = document.createElement('ul');
  fliters.classList.add('fliters');
  footer.appendChild(fliters);
  const flitersLiOne = document.createElement('li');
  const flitersLiTwo = document.createElement('li');
  const flitersLiThree = document.createElement('li');
  const flitersSpanOne = document.createElement('span');
  flitersSpanOne.innerHTML = ' ';
  const flitersSpanTwo = document.createElement('span');
  flitersSpanTwo.innerHTML = ' ';
  const liButtonOne = document.createElement('button');
  liButtonOne.classList.add('selected');
  liButtonOne.innerHTML = 'All';
  liButtonOne.style.marginLeft = '65px';
  const liButtonTwo = document.createElement('button');
  liButtonTwo.innerHTML = 'Active';
  liButtonTwo.style.marginLeft = '16px';
  liButtonTwo.style.marginRight = '16px';
  const liButtonThree = document.createElement('button');
  liButtonThree.innerHTML = 'Completed';
  //清除按钮的构键
  const clearComplete = document.createElement('button');
  clearComplete.innerHTML = 'Clear Completed';
  clearComplete.classList.add('clearComplete');
  //将footer的每个元素添加进去
  fliters.appendChild(flitersLiOne);
  fliters.appendChild(flitersSpanOne);
  fliters.appendChild(flitersLiTwo);
  fliters.appendChild(flitersSpanTwo);
  fliters.appendChild(flitersLiThree);
  fliters.appendChild(clearComplete);
  flitersLiOne.appendChild(liButtonOne);
  flitersLiTwo.appendChild(liButtonTwo);
  flitersLiThree.appendChild(liButtonThree);
  //输入框和todolisit的一些基本元素
  const toggleAll = document.createElement('input');
  toggleAll.classList.add('toggleAll');
  toggleAll.setAttribute('id', 'toggleAll');
  toggleAll.setAttribute('type', 'checkbox');
  main.appendChild(toggleAll);
  const label = document.createElement('label');
  label.setAttribute('for', 'toggleAll');
  main.appendChild(label);
  const todoUl = document.createElement('ul');
  todoUl.classList.add('todoUl');
  main.appendChild(todoUl);
  //监听回车，判断是否应该增加todo任务
  //根据存留任务数，更改状态的单复数
  document.addEventListener('keyup', keys => {
    if (keys.key === 'Enter') {
      if (todoBox.value) {
        count++;
        if(count > 1) {
          todoCountSpan.innerHTML = ' items left';
        }else {
          todoCountSpan.innerHTML = ' item left';
        }
        //确定用户希望创建新任务，开始创建新任务
        footer.style.display = 'block';
        strong.innerHTML = count;
        const li = document.createElement('li');
        li.setAttribute('state', '1');
        todoUl.appendChild(li);
        const div = document.createElement('div');
        div.classList.add('view');
        li.appendChild(div);
        const toggle = document.createElement('input');
        toggle.classList.add('toggle');
        toggle.setAttribute('type', 'checkbox');
        div.appendChild(toggle);
        const newLabel = document.createElement('label');
        newLabel.innerHTML = todoBox.value;
        div.appendChild(newLabel);
        todoBox.value = '';
        const button = document.createElement('button');
        button.classList.add('destroy');
        div.appendChild(button);
        //删除按钮的监听事件
        button.addEventListener('click', () => {
          button.parentNode.parentNode.removeChild(button.parentNode);
          count--;
          strong.innerHTML = count;
          if(count > 1) {
            todoCountSpan.innerHTML = ' items left';
          }else if(count===1) {
            todoCountSpan.innerHTML = ' item left';
          }else {
            footer.style.display = 'none';
          }
        });
        //根据label的状态判断任务是否完成
        toggle.addEventListener('change', () => {
          if (toggle.checked) {
            li.classList.add('complete');
            li.setAttribute('state', '0');
            count--;
            strong.innerHTML = count;
            if(count > 1) {
              todoCountSpan.innerHTML = ' items left';
            }else {
              todoCountSpan.innerHTML = ' item left';
            }
          } else {

            li.classList.remove('complete');
            li.setAttribute('state', '1');
            count++;
            strong.innerHTML = count;
          }
        });


      }
    }
  });
          //全部按钮的实现
          liButtonOne.addEventListener('click', () => {
            let i = todoUl.children.length;
            for(;i>0; i--) {
              todoUl.children[i-1].style.display = 'block';
            }
          })
          //未完成按钮的实现
          liButtonTwo.addEventListener('click', () => {
            let i = todoUl.children.length;
            for(; i>0; i--) {
              if(todoUl.children[i-1].getAttribute('state')==1){
                todoUl.children[i-1].style.display = 'block';
              }
              if(todoUl.children[i-1].getAttribute('state')==0){
                todoUl.children[i-1].style.display = 'none';
              }
            }
          })
          //已完成按钮的实现
          liButtonThree.addEventListener('click', () => {
            let i = todoUl.children.length;
            for(; i>0; i--) {
              if(todoUl.children[i-1].getAttribute('state')==0){
                todoUl.children[i-1].style.display = 'block';
              }
              if(todoUl.children[i-1].getAttribute('state')==1){
                todoUl.children[i-1].style.display = 'none';
              }
            }
          })
          //清除已完成任务全部按钮的监听事件
          clearComplete.addEventListener('click', () => {
            const sectionMain = clearComplete.parentNode.parentNode.parentNode.children[1];
            let i = sectionMain.children[2].children.length;
            for(; i>0; i--) {
              if(sectionMain.children[2].children[i-1].getAttribute('state')==0){
                sectionMain.children[2].removeChild(sectionMain.children[2].children[i-1]);
              }
            }
          })
          //全部完成按钮的监听事件
          toggleAll.addEventListener('change', () => {
            if(toggleAll.checked) {
              let i = toggleAll.parentNode.children[2].children.length;
              for(; i>0; i--){
                toggleAll.parentNode.children[2].children[i-1].children[0].children[0].checked = 'true';
              }
            }

          })
});
