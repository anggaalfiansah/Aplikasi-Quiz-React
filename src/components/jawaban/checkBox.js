import React, { Component } from 'react';

class checkBox extends Component {
    constructor(props) {
        super(props);
        this.state = { jawaban: [], disabled : false, hidden : false, jawabanVisibility : true };
    }

    eventHandler = (event) => {

        if (event.target.checked) {

            this.addDataJawaban(event.target.value);
        } else {
            this.removeDataJawaban(event.target.value);

        }

    }

    addDataJawaban = (nilai) => {
        let jawab = this.state.jawaban;
        jawab.push(nilai);
        this.setState({ jawaban: jawab })

    }

    removeDataJawaban = (nilai) => {
        let jawab = this.state.jawaban.filter((value) => {
            return value !== nilai
        })

        this.setState({ jawaban: jawab })

    }

    addJawaban = () => {
        let jawab = this.state.jawaban.sort();
        let nomor = this.props.nomor;
        let benar = this.props.jawab;
        let boolKoreksi = ""
        if (JSON.stringify(jawab) === JSON.stringify(this.props.jawab.sort())) {
            boolKoreksi = "Benar"
        } else {
            boolKoreksi = "Salah"
        }

        this.props.funcJawab({
            nomor: nomor,
            jawaban: jawab.join(),
            jawabKoreksi: boolKoreksi,
            jawabBenar : benar.join()

        })

    }

    submitButton = () => {
        this.setState({disabled : true, hidden: true, jawabanVisibility : false})
        this.addJawaban()
    }

    jawaban = () => {
        if (JSON.stringify(this.state.jawaban.sort()) === JSON.stringify(this.props.jawab.sort())) {
            return <span id="cek-jawaban" className="text-success">Jawaban Benar</span>
        } else {
            return <span id="cek-jawaban" className="text-danger">Jawaban Salah</span>
        }
    }
    render() {
        return (
            <div className="form-group">
                {this.props.data.option.map((check, key) => {
                    return (
                        <div className="form-check" key={key}>
                            <input className="form-check-input" type="checkbox" disabled={this.state.disabled} defaultValue={check} id="option" onChange={this.eventHandler} />
                            <label className="form-check-label">{check}</label>
                        </div>
                    )
                })}
                <button className="btn btn-primary mt-2" hidden={this.state.hidden} onClick={this.submitButton}>Submit</button>
                <br/>
                <div hidden={this.state.jawabanVisibility}>
                    {this.jawaban()}
                </div>
            </div>
        );
    }
}

export default checkBox;