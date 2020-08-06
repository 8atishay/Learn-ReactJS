var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('Clock');
var TestUtils = ReactDOM.TestUtils;
describe('lets test',()=>{
    it('should properly run',()=>{
        expect(1).toBe(1);
    })

    it('lets check for component exist',()=>{
        expect(Clock).toBeTruthy();
    })

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
      });
      
    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });
    it('rendering',function(){
        TestUtils(()=>{
            ReactDOM.render(<Clock />, container);
        })
        var seconds = 615;
        var expected ='10:15';
        var actual = container.formatSeconds(seconds);
        expect(actual).toBe(expected);
    })
})