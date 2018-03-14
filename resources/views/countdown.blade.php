@extends('master')

@section('app')

    <div id="text">
        <div id="countdown" data-date="{{ config('coupe.date') }}">...</div>
        <div id="event">avant la Coupe Robots-JU 2018</div>
        <div id="link"><a href="https://coupe.robots-ju.ch/">Coupe.Robots-JU.ch</a></div>
    </div>

@endsection
