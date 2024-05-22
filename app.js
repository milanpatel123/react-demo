
{/* <div id="parent">
    <div id="child">
        <h1>heading</h1>
    </div>
</div> */}

const parent = React.createElement('div', {id:'parent'}, 
    React.createElement('div', {id:'child'}, 
    [React.createElement('h1', {id:'heading'}, 'parent block'),React.createElement('h2', {id:''}, 'parent block 2')]
    )
);

const heading = React.createElement('h1', {id:'heading'}, 'Welcome from react');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)