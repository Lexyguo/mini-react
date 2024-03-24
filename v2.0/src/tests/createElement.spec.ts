import { it,describe,expect } from "vitest";
import React from "../core/React";

describe('createElement',() => {
    it('should return vdom for element',() => {
        const el = React.createElement('div',{},'xxx')
        expect(el).toEqual({
            type: 'div',
            props: {
                children:[{
                    type:'TEXT_ELEMENT',
                    props:{
                        nodeValue: 'xxx',
                        children: []
                    }
                }]
            }
        })
    })
})