import React, { useContext } from 'react';

import { AccountContext } from '../context/AccountProvider';

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <div>
                <div className="row">

                    <div className="col">
                        <div className="card radius-15">
                            <div className="card-body text-center">
                                <div className="p-4 border radius-15" style={{ height: "95vh" }} >
                                    <img src={account.picture} width={110} height={110} className="rounded-circle shadow" alt="" />
                                    <h5 className="mb-0 mt-5">{account.name}</h5>
                                    <p className="mb-3">Webdeveloper</p>

                                    <h4><strong className="d-grid">{account.email}</strong></h4>
                                    <div className="d-grid mt-4">
                                        <strong>Status :</strong>
                                        The Grind never stops💕
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile