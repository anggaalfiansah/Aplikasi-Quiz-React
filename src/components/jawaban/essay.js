import React, { Component } from 'react';

class essay extends Component {
    constructor(props) {
        super(props);
        this.state = { jawaban: 0, disabled: false, hidden: false, jawabanVisibility: true };
        this.inputText = "";
    }

    eventHandler = (e) => {
        this.inputText = e.target.value;
        // this.addJawaban(e.target.value);
    }

    addJawaban = (a) => {
        let jawab1 = a;
        let nomor = this.props.nomor;
        let boolKoreksi = ""
        if (jawab1 > this.props.jawab) {
            boolKoreksi = "Benar"
        } else {
            boolKoreksi = "Salah"
        }

        this.props.funcJawab({
            nomor: nomor,
            jawaban: jawab1

        })

        this.props.funcKoreksi({
            nomor: nomor,
            jawabKoreksi: boolKoreksi

        })

    }

    jawaban = () => {
        let jawaban = this.state.jawaban;
        if (jawaban > this.props.jawab) {
            return <span id="cek-jawaban" className="text-success">Jawaban Benar</span>
        } else {
            return <span id="cek-jawaban" className="text-danger">Salah, Minimal {this.props.jawab} karakter</span>
        }
    }

    submitButton = () => {
        let fn = this.inputText
        let fnLength = fn.length
        this.setState({ jawaban: fnLength, disabled: true, hidden: true, jawabanVisibility: false })
        console.log(this.state.jawaban)
        {this.addJawaban(fnLength)}
    }

    render() {
        return (
            <div>
                <textarea onChange={this.eventHandler} className="form-control" disabled={this.state.disabled} placeholder={`minimal ${this.props.jawab} karakter`}></textarea>
                <button className="btn btn-primary mt-2" hidden={this.state.hidden} onClick={this.submitButton}>Submit</button>
                <br />
                <div hidden={this.state.jawabanVisibility}>
                    {this.jawaban()}
                </div>
            </div>
        );
    }
}

export default essay;