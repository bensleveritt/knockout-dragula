(function(ko) {
  'use strict';

  var viewModel = {
    items1: ko.observableArray([{
      name: 'Item A'
    }, {
      name: 'Item B'
    }, {
      name: 'Item C'
    }, {
      name: 'Item D'
    }]),
    items2: ko.observableArray([{
      name: 'Item 1'
    }, {
      name: 'Item 2'
    }, {
      name: 'Item 3'
    }, {
      name: 'Item 4'
    }]),
    afterDrop: function() {
      console.log(arguments);
    },
    afterDelete: function() {
      console.log(arguments);
    },
    remove: function(item) {
      this.items1.remove(item);
    }
  };

  window.knockoutDragula.options('test', { removeOnSpill: true });

  ko.applyBindings(viewModel);
})(window.ko);
