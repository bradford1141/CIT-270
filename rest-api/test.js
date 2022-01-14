import sayHello from '../helloworld';
import assert from 'assert';
import { isTypedArray } from 'util/types';

describe("Hello World", ()=>{
    describe("helloWorld fuction", ()=>{
        it("Should say hello",()=>{
            const hello = sayHello();

            assert.equal(hello,"hello");
        });
    })
})