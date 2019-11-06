import dva from 'dva';
import {message} from 'antd';
import './index.css';
// const createBrowserHistory = require("history").createBrowserHistory;
// 1. Initialize
const app = dva({
        // history: createBrowserHistory(),
        onError (error) {
            if(error.success){
                message.error(error.RET_MSG)
            }else{
                message.error(error.message)
            }
        },
    });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
