import Ember from 'ember';
const {
  Controller,
  computed,
} = Ember;

export default Controller.extend({
  percentageLabel: function(value /*, index, item*/ ) {
    return `${value}%`;
  },
  valueLabel: function(value /*, index, item*/ ) {
    return value;
  },
  demo1: 25,
  demo2: 50,
  demo3: 150,
  demo4: {
    a: 15,
    b: 63,
    c: 48,
  },
  demo5: {
    a: 52,
    b: 73,
    c: 8,
  },
  demo6: 75,
  pinkTheme: {
    linearGradient: {
      x1: '0%',
      y1: '100%',
      x2: '50%',
      y2: '0%',
      spreadMethod: 'pad'
    },
    stops: [{
      offset: '0%',
      'stop-color': '#d5299f',
      'stop-opacity': 1
    }, {
      offset: '100%',
      'stop-color': '#E887C9',
      'stop-opacity': 1
    }]
  },
  tealTheme: {
    linearGradient: {
      x1: '0%',
      y1: '100%',
      x2: '50%',
      y2: '0%',
      spreadMethod: 'pad'
    },
    stops: [{
      offset: '0%',
      'stop-color': '#41AAAA',
      'stop-opacity': 1
    }, {
      offset: '100%',
      'stop-color': '#2D7676',
      'stop-opacity': 1
    }],
  },
  orangeTheme: {
    linearGradient: {
      x1: '0%',
      y1: '100%',
      x2: '50%',
      y2: '0%',
      spreadMethod: 'pad'
    },
    stops: [{
      offset: '0%',
      'stop-color': '#FF6D00',
      'stop-opacity': 1
    }, {
      offset: '100%',
      'stop-color': '#FFAB40',
      'stop-opacity': 1
    }]
  },
  redTheme: {
    linearGradient: {
      x1: '0%',
      y1: '100%',
      x2: '50%',
      y2: '0%',
      spreadMethod: 'pad'
    },
    stops: [{
      offset: '0%',
      'stop-color': '#ffff00',
      'stop-opacity': 1
    }, {
      offset: '100%',
      'stop-color': '#ff0000',
      'stop-opacity': 1
    }]
  },
  multiSeries: computed('demo5.a', 'demo5.b', 'demo5.c', function() {
    return [{
      color: '#D5299F',
      value: this.get('demo5.a'),
    }, {
      color: '#41AAAA',
      value: this.get('demo5.b'),
    }, {
      color: '#FF6D00',
      value: this.get('demo5.c'),
    }];
  }),
});