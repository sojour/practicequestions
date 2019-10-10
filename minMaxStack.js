class MinMaxStack {
  constructor() {
    this.values = [];
    this.minMaxValues = [];
  }
  peek() {
    // Write your code here.
    return this.values[this.values.length - 1];
  }

  pop() {
    // Write your code here.
    this.minMaxValues.pop();
    return this.values.pop();;
  }

  push(number) {
    // Write your code here.
    let minMax = { min: number, max: number };

    if (this.minMaxValues.length) {
      let previousMinMax = this.minMaxValues[this.minMaxValues.length - 1];
      minMax['min'] = Math.min(previousMinMax.min, minMax.min);
      minMax['max'] = Math.max(previousMinMax.max, minMax.max);
    }


    this.values.push(number);
    this.minMaxValues.push(minMax);
  }

  getMin() {
    // Write your code here.
    return (this.minMaxValues[this.minMaxValues.length - 1]).min
  }

  getMax() {
    // Write your code here.
    return (this.minMaxValues[this.minMaxValues.length - 1]).max

  }
}
