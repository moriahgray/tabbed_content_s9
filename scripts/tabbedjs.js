document.addEventListener('DOMContentLoaded', (event) => {
  const tabController = new TabController();
  tabController.init();
});

class TabController {
  constructor() {
    this.tablinks = document.querySelectorAll('.tablinks');
    this.tabcontent = document.querySelectorAll('.tabcontent');
  }

  init() {
    this.tablinks.forEach((tab) => {
      tab.addEventListener('click', (event) => this.openTab(event, tab.dataset.tab));
    });
    this.openTab({currentTarget: this.tablinks[0]}, 'Tab1');
  }

  openTab(evt, tabName) {
    this.tabcontent.forEach((content) => content.style.display = 'none');
    this.tablinks.forEach((tab) => tab.classList.remove('active'));
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
    this.loadTabContent(tabName);
  }

  loadTabContent(tabName) {
    const contentElement = document.getElementById(tabName);
    contentElement.innerHTML = tabData[tabName];
  }
}
