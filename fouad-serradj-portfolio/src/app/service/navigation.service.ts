import { Injectable } from '@angular/core';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  updateHighlightedNavbarOption() {
    $(document).ready(() => {
      var currentURL = $(location).attr("href");
      let regx_home = /.*home.*/;
      let regx_workProjects = /.*work-projects.*/;
      let regx_academicProjects = /.*academic-projects.*/;
      let regx_skills = /.*skills.*/;
      if(currentURL.match(regx_workProjects)){
        $('.work-projects-link').addClass("active");
        $('.academic-projects-link').removeClass("active");
        $('.skills-link').removeClass("active");
        $('.home-link').removeClass("active");
      } else if (currentURL.match(regx_academicProjects)) {
        $('.academic-projects-link').addClass("active");
        $('.work-projects-link').removeClass("active");
        $('.skills-link').removeClass("active");
        $('.home-link').removeClass("active");
      } else if (currentURL.match(regx_skills)){
        $('.skills-link').addClass("active");
        $('.academic-projects-link').removeClass("active");
        $('.work-projects-link').removeClass("active");
        $('.home-link').removeClass("active");
      } else if (currentURL.match(regx_home)){
        $('.home-link').addClass("active");
        $('.academic-projects-link').removeClass("active");
        $('.work-projects-link').removeClass("active");
        $('.skills-link').removeClass("active");
      }
    });
  }

  constructor() { }
}
