<?php

namespace App\Command;

use App\DomainModel\CountryData;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;
use Symfony\Component\Console\Style\SymfonyStyle;

class CountryDatabaseCommand extends Command
{
    protected static $defaultName = 'app:country-database';
    protected static $defaultDescription = 'Add a short description for your command';

    private $country;

    public function __construct(CountryData $country)
    {   
        $this->country = $country;

        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('file', InputArgument::OPTIONAL, 'File in json format to insert to table country')
            ->addOption('delete', null, InputOption::VALUE_NONE, 'Option to delete all table country data')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = $input->getArgument('file');


        if ($file) {
            $io->note(sprintf('File to insert: %s', $file));

            $result = $this->country->insertCountryData($file);
        }

        if ($input->getOption('delete')) {

            $helper = $this->getHelper('question');
            $question = new ConfirmationQuestion('<fg=red;options=bold>This action will delete All country data table and the associates. Do you wish to continue?</> <fg=yellow>y</>[<fg=red>yes</>]/n[<fg=green>no</>]', false);

            if (!$helper->ask($input, $output, $question)) {
                return 0;
            }
            $address = $this->country->checkAddressData();
            


            if ($address)
            {
                

                $helper = $this->getHelper('question');
                $question = new ConfirmationQuestion('<fg=red>Data Address exist, do you with to remove? </>y[yes]/n[no]', false);

                if (!$helper->ask($input, $output, $question)) {
                    return 0;
                }

                $this->country->deleteAddressData($address);

            }
            
            $delete = $this->country->removeCountryData();

            if($delete)
            {
            $io->success('Data deleted Sucessfully!!');
            return 0;
            }
            else{
                $io->error('No data deleted.');
            return 0;
            }
        }

        if ($result)

        {
            $io->success('Data country inserted sucessfully !!! yea!!');
            return 0;
        }else{

            $io->error('Inserting Data not sucess check country data if exist.');
            return 0;
        }

        return 0;
    }
}
