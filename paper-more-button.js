import '@polymer/polymer/polymer-legacy.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
/**
A material design button to load more items in a list.

### Example

```html
<paper-more-button has-more=[[hasMore]] loading=[[loading]]>More</paper-more-button>
```

@demo demo/index.html
*/
Polymer({
    is: 'paper-more-button',
    _template: html`
    <paper-button hidden$=[[!_showMore(hasMore,loading)]] on-tap="_tapMore"><slot></slot></paper-button>
    <paper-spinner-lite active=[[loading]]></paper-spinner-lite>
    `,
    
    properties: {
        /**
        * True if the lister has more items than currently shown
        */
        hasMore: {
            type: Boolean,
            value: false
        },
        
        /**
        * True if the lister is currently loading items
        */
        loading: {
            type: Boolean,
            value: false
        }
    },
    
    // Private methods
    _tapMore: function() {
        this.fire('tap-more');
    },
    _showMore: function(hasMore, loading) {
        return hasMore && !loading;
    }
});
