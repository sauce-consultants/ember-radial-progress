/* global RadialProgressChart*/

import Ember from 'ember';
import layout from '../templates/components/radial-progress';

const {
  Component,
  observer
} = Ember;

export default Component.extend({
  layout,
  classNames: ['radial-progress'],
  value: 0,
  center: [],
  series: [],
  // internal diameter
  diameter: 200,
  strokeWidth: 40,
  strokeGap: 2,
  shadowWidth: 4,
  animationDuration: 1750,
  // between each ring,
  animationDelay: 200,
  min: 0,
  max: 100,
  round: true,
  color: null,
  labelStart: null,
  // Observers
  valueObserver: observer('value', function() {
    Ember.run.debounce(this, this.updateChartValue, 500);
  }),
  seriesObserver: observer('series', function() {
    Ember.run.debounce(this, this.updateChartSeries, 500);
  }),
  // Methods
  didInsertElement() {
    this._super(...arguments);
    this.initChart();
  },
  updateChartValue() {
    let value = parseFloat(this.get('value')),
      progress = this.get('_progress');
    progress.update([value]);
  },
  updateChartSeries() {
    let series = this.parseSeries(this.get('series')),
      progress = this.get('_progress');

    window.console.log(series);
    progress.update(series);
  },
  initChart() {
    let value = this.get('value'),
      center = this.get('center'),
      diameter = this.get('diameter'),
      stroke = {
        width: this.get('strokeWidth'),
        gap: this.get('strokeGap'),
      },
      shadow = {
        width: parseInt(this.get('shadowWidth')),
      },
      animation = {
        duration: this.get('animationDuration'),
        delay: this.get('animationDelay'),
      },
      min = this.get('min'),
      max = this.get('max'),
      round = this.get('round'),
      series = this.get('series'),
      elementId = this.elementId;

    series = this.parseSeries(series, value);

    window.console.log(series);

    window.console.log(`init chart #${elementId}`);

    var progress = new RadialProgressChart(`#${elementId}`, {
      diameter,
      series,
      center,
      stroke,
      shadow,
      animation,
      min,
      max,
      round,
      id: this.elementId,
    });

    this.set('_progress', progress);
  },
  parseSeries: function(series, value) {
    if (!series.length > 0) {
      let color = this.get('color'),
        labelStart = this.get('labelStart');

      series = [{
        value,
        color,
        labelStart,
      }];
    } else if (Ember.typeOf(series[0]) !== 'object') {
      // Same here for flat arrays
      series = series.map((obj) => {
        return parseFloat(obj);
      });
    }
    return series;
  },
});