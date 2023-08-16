import React from 'react'

const ChatFooter = (props) => {

    return (
        <>
            <div className="row reply">

                <div className="col-sm-11 col-xs-11 reply-main">
                    <textarea className="form-control" rows={1} id="comment" name='message'
                        value={props.value}
                        onChange={(e) => { props.setvalue(e.target.value) }}
                        onKeyPress={(e) => { props.sendText(e) }}
                    />
                </div>
                
            </div>
        </>
    )
}

export default ChatFooter