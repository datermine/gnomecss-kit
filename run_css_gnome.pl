#!/usr/bin/perl

use strict;
use warnings;

my $SERVER_URL = "http://www.dollarbells.com/api/cssgnome";

my $css = $ARGV[0];
my $js = $ARGV[1];
my $config = $ARGV[2];
my $outputFileName = $ARGV[3];

print `curl -o $outputFileName --form config=\@"$config" --form css=\@"$css" --form js=\@"$js" $SERVER_URL`;

