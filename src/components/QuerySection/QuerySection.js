import SplitPane from 'react-split-pane'
import QueryResult from '../QueryResult'
import QueryTabs from '../QueryTabs'
// import 'react-tabs/style/react-tabs.css';

const QuerySection = () => {
    return <SplitPane
        split="horizontal"
        className="oveflow-auto"
        minSize={240}
        maxSize={680}
        paneStyle={{overflow: 'auto'}}
        // primary="second"
        defaultSize={360}
    >
        <div className="h-full w-full">
            <QueryTabs />
        </div>
        <div className="bg-slate-100 h-full w-full overflow-auto relative">
            <div className="p-2 font-bolder sticky bg-white border-t border-slate-200 top-0 w-full">
                <span className="text-gray-500 mr-5">Output - </span> 
                <span className="text-sm font-semibold">Total rows: 123 of 123</span>
            </div>
            <div className="oveflow-auto">
                <QueryResult />
            </div>
        </div>
    </SplitPane>
}

export default QuerySection
