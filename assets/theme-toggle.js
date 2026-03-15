(function(){
  const storageKey = 'site-theme';
  const toggleId = 'theme-toggle';
  const el = document.getElementById(toggleId);
  function setTheme(name){
    if(name === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
  function currentTheme(){
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function updateButton(){
    if(!el) return;
    el.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
    el.setAttribute('aria-pressed', currentTheme() === 'dark');
  }
  // init
  try{
    const saved = localStorage.getItem(storageKey);
    if(saved){
      setTheme(saved);
    } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
  } catch(e){/* ignore */}
  // listen to system changes only if no user preference
  try{
    if(!localStorage.getItem(storageKey) && window.matchMedia){
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        setTheme(e.matches ? 'dark' : 'light');
        updateButton();
      });
    }
  } catch(e){/* ignore */}
  if(el){
    el.addEventListener('click', function(){
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      try{ localStorage.setItem(storageKey, next); } catch(e){}
      setTheme(next);
      updateButton();
    });
    updateButton();
  }
})();
