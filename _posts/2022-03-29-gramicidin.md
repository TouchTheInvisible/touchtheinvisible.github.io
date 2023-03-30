---
layout: model
title: Gramicidin
date: 2022-03-22T14:31:12.736Z
preview: "https://github.com/TouchTheInvisible/touchtheinvisible.github.io/blob/master/assets/img/1NRM-Gramicidin/1NRM-Gramicidin_Ribbon+HBonds+AA.png?raw=true" 
models:
    - name: Gramicidin Ribbon Model
      file: https://raw.githubusercontent.com/TouchTheInvisible/touchtheinvisible.github.io/master/assets/models/1NRM-Gramicidin/1NRM-Gramicidin_Ribbon.dae
    - name: Gramicidin Ribbon Model with Hydrogen Bonding
      file: https://raw.githubusercontent.com/TouchTheInvisible/touchtheinvisible.github.io/master/assets/models/1NRM-Gramicidin/1NRM-Gramicidin_Ribbon%2BHBonds.dae
    - name: Gramicidin Full-Atomic Model with Transparent Surface
      file: https://raw.githubusercontent.com/TouchTheInvisible/touchtheinvisible.github.io/master/assets/models/1NRM-Gramicidin/1NRM-Gramicidin_Ribbon%2BHBonds%2BAA%2BTransparentSurface.dae
    - name: Gramicidin Surface Model
      file: https://raw.githubusercontent.com/TouchTheInvisible/touchtheinvisible.github.io/master/assets/models/1NRM-Gramicidin/1NRM-Gramicidin_Surface.dae

image: https://drive.google.com/file/d/1fUluvfVrcCohD9ffXX0uZPFRlWJvW7ms/preview

figuresheet: /assets/figure_sheets/1NRM-Gramicidin_Photosheet.pdf
infographic: /assets/infographics/Gramicidin_Infographics.pdf



mark:
    - name: 3
      link: 2google  


---
Gramicidin is a naturally occurring antibiotic protein secreted by the bacterium _Bacillus brevis_. Structurally, it is composed of two identical monomeric helices forming a transmembrane channel. The channel portion of the protein facilitates the diffusion of ions across the membrane, disrupting the natural ion distribution across the cellular membrane, eventually leading to cell death. In the natural environment, _B. brevis_ secretes the protein to outcompete other bacteria and fungi in the environment. Gramicidin has been used in treatment of topical infections for the antibiotic effect on a diverse range of bacteria.


{% if page.mark[1] %}
{% for item in page.mark %}
<ul>{{item.name}}</ul>
{% endfor %}
{% endif %}

