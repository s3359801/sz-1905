<template>
<div>
<div class="loader"></div>
<div class="pause">Click To Pause</div>
</div>

</template>

<script class="cssdeck" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script>
export default {
    name:"loading"
};
</script>

 <style  scoped>
body {
  padding: 0;
  margin: 0;
  background: #34495e;
}

.loader {
  background: #c94c23;
  height: 3em;
  width: 3em;
  margin: 7em auto;
  animation: loadit 4s linear infinite;
}

@keyframes loadit {
  55% {
    background: rgba(189,195,199,0.4);
    border-radius: 100%;
    transform: rotate(360deg);
    box-shadow: 7em 0 0 rgba(189,195,199,0.3),-7em 0 0 rgba(189,195,199,0.3),3em 0 0 rgba(189,195,199,0.3),-3em 0 0 rgba(189,195,199,0.3),0 7em 0 rgba(189,195,199,0.3),0 -7em 0 rgba(189,195,199,0.3),0 3em 0 rgba(189,195,199,0.3),0 -3em 0 rgba(189,195,199,0.3);
  }
}

.pause {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  color: rgba(189,195,199,0.4);
  cursor: pointer;
}

.pauseit {
  animation-play-state: paused;
}

.kanu {
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
  color: rgba(189,195,199,0.4);
}  

.kanu a{
    color: inherit;
    text-decoration: none;
}
</style>
