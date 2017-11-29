@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Chatroom <span class="badge pull-right"></span>
                    </div>
                    <message-container :messages="messages"></message-container>
                    <message-send @messagesent="addMessage"></message-send>
                </div>
            </div>
        </div>
    </div>
@endsection