<template> 
<div class = "enty">
    <svg class="imac" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389 322">
        <title>imac</title>
        <g class="computer">
        <path d="M428.4,86.69H72.22A16.41,16.41,0,0,0,55.81,103.1V315.69h389V103.1A16.41,16.41,0,0,0,428.4,86.69Z" transform="translate(-55.81 -86.69)"/>
        
        <path class="bottom-computer" d="M55.81,315.69v34.59a16.41,16.41,0,0,0,16.41,16.41H428.4a16.41,16.41,0,0,0,16.41-16.41V315.69Z" transform="translate(-55.81 -86.69)"/>
        <rect class="monitor" x="16" y="17" width="356" height="200"/>
        
        <rect class="base-1" x="157" y="280" width="75" height="37"/>
        <path class="bottom-computer" d="M307.21,408.69H192.9a2.44,2.44,0,0,1-2.31-1.51,2.5,2.5,0,0,1,2.19-3.49H307.09a2.44,2.44,0,0,1,2.31,1.51A2.5,2.5,0,0,1,307.21,408.69Z" transform="translate(-55.81 -86.69)"/>
        
        </g> 
          

    
        <g class = "download-section" ref = "downloadsection">
        <rect class="download-bar" x="16" y="194.61" width="356" height="22.39"/>
        <rect class="download-item" x="22.67" y="198.2" width="90.5" height="16.99"/>
        <text class="filename" transform="translate(36.56 209.08)">CalcTextBook.pdf.exe</text>
        </g>
        
        <g class = "bookdownload">
        <rect x="145.63" y="29.86" width="91.67" height="117.73"/>
         <text class="book" transform="translate(162.14 42.6)">The Big <tspan x="-4.73" y="14.4">Book of </tspan><tspan x="-3.47" y="28.8">College </tspan><tspan x="-8.57" y="43.2">Calculus </tspan><tspan x="-12.52" y="57.6">with over </tspan><tspan x="11.36" y="72">1200 </tspan><tspan x="-6.7" y="86.4">Practice </tspan><tspan x="-11.4" y="100.8">problems</tspan></text>
        <rect class="downloadbox" x="103.4" y="151.71" width="178.01" height="29.24" />
        <text class="downloadtext" transform="translate(133.46 170.49)">Free Download</text>
    
        
        </g>
        
        <g class = pointer-group>
        <polygon points="281.4 134.76 281.4 145.96 284.4 143.06 284.8 142.96 289.6 142.96 281.4 134.76" class = "pointer" ref="pointer"/>

        </g>
       
    
  
  
    <g class = "ransomware-screen" ref = "ransomwarescreen">
      <rect id="rect2176" class="rw-background" x="15.11" y="17" width="356.89" height="200"/>
    <rect class="terminal" x="56.62" y="62.55" width="284.62" height="111.33"/>
    <rect class="toolbar" x="56.62" y="52.96" width="284.62" height="10.48"/><circle class="yellow" cx="69.77" cy="58.58" r="2.27"/>
    <circle class="red" cx="62.46" cy="58.58" r="2.27"/>
    <circle class="green" cx="76.9" cy="58.58" r="2.27"/>
	
        <!--
	<tspan x="60" y="65" dy="1.2em" ref = "line1" class = "line">user$ > hi, i'm mr. robot.  </tspan> 
    <tspan x="60" y="70" dy="1.2em" ref = "line2" class = "line">user$ > i'm sorry to do this to you... </tspan> 
    <tspan x="60" y="75" dy="1.2em" ref = "line3" class = "line" >user$ > but i'm hacking your files </tspan> 
    <tspan x="60" y="80" dy="1.2em" ref = "line4" class = "line">user$ > you shouldn't have downloaded that textbook...</tspan>
    <tspan x="60" y="85" dy="1.2em" ref = "line5" class = "line" >user$ > but not all is lost</tspan>
    <tspan x="60" y="90" dy="1.2em" ref = "line6" class = "line">user$ > send 5000 Bitcoin to the following wallet to get your files back:  </tspan> 
    -->
 <path id="path">
		<animate attributeName="d" from="m 60,70 h 0" to="m 60,70 h 1100" dur="21.4s" begin="3.4s" repeatCount="once"/>
	</path>
	 <path id="path2">
		<animate attributeName="d" from="m 60,80 h 0" to="m 60,80 h 1100" dur="18.0s" begin="6.8s" repeatCount="once"/>
	</path>
		 <path id="path3">
		<animate attributeName="d" from="m 60,90 h 0" to="m 60,90 h 1100" dur="13.6s" begin="10.2s" repeatCount="once"/>
	</path>
		 <path id="path4">
		<animate attributeName="d" from="m 60,100 h 0" to="m 60,100 h 1100" dur="10.2s" begin="13.6s" repeatCount="once"/>
	</path>
		 <path id="path5">
		<animate attributeName="d" from="m 60,110 h 0" to="m 60,110 h 1100" dur="6.8s" begin="18.0s" repeatCount="once"/>
	</path>
		 <path id="path6">
		<animate attributeName="d" from="m 60,120 h 0" to="m 60,120 h 1100" dur="3.4s" begin="21.4s" repeatCount="once"/>
	</path>
    <text class="terminaltext" ref = "ttext" >
    <textPath xlink:href="#path">
    <tspan x="0" dy="1.2em">user$ > hi, i'm mr. robot. </tspan>
</textPath>
<textPath xlink:href="#path2" class = "line2path">
    <tspan x="0" dy="1.2em">user$ > i'm sorry to do this to you... </tspan>
</textPath>
<textPath xlink:href="#path3">
    <tspan x="0" dy="1.2em">user$ > but i'm hacking your files </tspan>
</textPath>
<textPath xlink:href="#path4">
    <tspan x="0" dy="1.2em">user$ > you shouldn't have downloaded that textbook...</tspan>
</textPath>
<textPath xlink:href="#path5">
    <tspan x="0" dy="1.2em">user$ > but not all is lost</tspan>
</textPath>
<textPath xlink:href="#path6">
    <tspan x="0" dy="1.2em">user$ > send 5000 Bitcoin to the following wallet to get your files back: </tspan>
</textPath>
	</text>
    </g> 

        </svg>
</div>
</template>
<style scoped>
@keyframes movePointer {
    20% {
        transform: translate(-20px, 30px);
    }
    100% {
        transform: translate(-20px, 30px);
    }
}

.pointer-group .pointer:hover {
    animation: movePointer 2s;
}

.download-section {
    opacity: 0;
}

.ransomware-screen {
    opacity: 0;
}
.bottom-computer{fill:#c3c3c3;}
.rw-background{fill:#6f6f6f;}
.monitor{fill:#e6e6e6;}
.base-1{fill:#acacac;}
.download-bar, .download-item{fill:#d3d3d3;}
.line{
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
}
.book,.downloadtext{font-size:12px;font-family:NiseSegaSonic;}
.book{fill:#ea0000;}
.download-item{stroke:#000;stroke-miterlimit:10;}
.filename{font-size:6px;font-family:FontAwesome5-Regular, "Font Awesome 5 ";}
.downloadbox{fill:#0aa2ff;}
.terminal{fill:#fff;}
.toolbar{fill:#d3d3d3;}
.yellow{fill:#ff0;}
.red{fill:#ff1550;}
.green{fill:#2cff1f;}
.terminaltext{font-size:5px;fill:#231f20;font-family:FontAwesome5-Regular, "Font Awesome 5"; font-weight: 900;  position: relative;}
</style>
<script>
import anime from 'animejs';



export default {
name: 'app',
 methods: { /* your methods here */ },
  mounted () {
    // using refs is an easier way of getting elements
    var elements = this.$refs.pointer
    var downloads = this.$refs.downloadsection
    var ransomware = this.$refs.ransomwarescreen
    var line1 = this.$refs.line1
    var line2 = this.$refs.line2
    var line3 = this.$refs.line3
    var line4 = this.$refs.line4
    var line5 = this.$refs.line5
    var line6 = this.$refs.line6
    var termtext = this.$refs.ttext

    var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
}
     
  
    
);


tl.add({
    targets: elements,
    translateX: -20,
    translateY: 30
});
tl.add({
    targets: downloads,
    opacity: 1
});
tl.add({
    targets: elements,
    translateX: -200,
    translateY: 70
});
tl.add({
    targets: ransomware,
    opacity: 1
});

  }
}



</script>