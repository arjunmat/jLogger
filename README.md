jLogger
=======

A simple jQuery plugin to log javascript errors to a server database

Usage
=====

Include the jLogger plugin file

The default server file for committing to the database is '/common/processClientLogs.php'

To change the server file, initialize jLogger with:
    
    $.jLogger.init({url: '</path/to/filename>'});

To log events and errors

    $.jLogger.log({errNo: <errNo>, errMsg: <errMsg>, errDump: <array of data>});
