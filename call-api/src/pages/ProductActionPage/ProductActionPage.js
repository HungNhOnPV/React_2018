import React, { Component } from 'react';

class ProductActionPage extends Component {

    render() {
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Ten san pham:</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gia">Gia:</label>
                        <input type="text" className="form-control" id="gia" />
                    </div>
                    <div className="form-group">
                        <label>Trang thai:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" />
                            Con hang
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Luu lai</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
