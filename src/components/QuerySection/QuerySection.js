import SplitPane from 'react-split-pane'
import QueryResult from '../QueryResult'
import QueryTabs from '../QueryTabs'
// import 'react-tabs/style/react-tabs.css';

const QuerySection = () => {
    return <SplitPane
        split="horizontal"
        minSize={50}
        // primary="second"
        defaultSize={360}
    >
        <div className="h-full">
            <QueryTabs />
        </div>
        <div className="bg-slate-100 h-full w-full overflow-auto relative">
            <div className="p-2 font-bolder sticky bg-white border-t border-slate-200 text-gray-500 top-0 w-full">Output</div>
            <div className="overflow-auto">
                <QueryResult />
            </div>
        </div>
    </SplitPane>
}

export default QuerySection
