import angular from 'angular';
// import uirouter from '@uirouter/angularjs';

import RootComponent from './root.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

const RootModule = angular.module('ng-redux-sampler', [
  // uirouter,
  ComponentsModule,
  CommonModule,
])
  .component('root', RootComponent)
  // .config(($urlRouterProvider, $locationProvider) => {
  //   'ngInject';

  //   $urlRouterProvider.otherwise('/entry');
  //   $locationProvider.html5Mode(true);
  // })
  .name;

export default RootModule;
